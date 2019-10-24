using System;
using System.Collections.Generic;
using System.Linq.Expressions;

namespace GifBattleDotnet.Models.Repository
{
    public interface IRepositoryBase<T>
    {
        List<T> FindAll();  
        List<T> FindAll(Expression<Func<T, bool>> expression);      
        T FindOneByCondition(Expression<Func<T, bool>> expression);
        List<T> FindListByCondition(Expression<Func<T, bool>> expression);
        T Create(T entity);
        void Update(Expression<Func<T, bool>> expression,T entity);
        void Delete(T entity);
    }
}