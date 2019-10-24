using Microsoft.EntityFrameworkCore;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;

namespace GifBattleDotnet.Models.Repository
{
    public abstract class RepositoryBase<T> : IRepositoryBase<T> where T : class
    {
        protected readonly IMongoCollection<T> _collection;

        public RepositoryBase(IGifBattleDatabaseSettings settings)
        {
            var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.DatabaseName);

            _collection = database.GetCollection<T>(settings.GifsCollectionName);
        }

        public List<T> FindAll() =>
            _collection.Find(x => true).ToList();
        
        public List<T> FindAll(Expression<Func<T, bool>> expression) =>
            _collection.Find<T>(expression).ToList();

        public T FindOneByCondition(Expression<Func<T, bool>> expression)
        {
            return _collection.Find<T>(expression).FirstOrDefault();
        }

        public List<T> FindListByCondition(Expression<Func<T, bool>> expression)
        {
            return _collection.Find<T>(expression).ToList();
        }

        public T Create(T entity)
        {
            _collection.InsertOne(entity);
            return entity;
        }

        public void Update(Expression<Func<T, bool>> expression,T entity) =>
            _collection.ReplaceOne(expression, entity);

        public void Delete(T entity)
        {
            //GifBattleContext.Set<T>().Remove(entity);
        }
    }
}