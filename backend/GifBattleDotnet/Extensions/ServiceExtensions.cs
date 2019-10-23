using GifBattleDotnet.Models;
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Options;

namespace GitBattleDotnet.Extensions
{
    public static class ServiceExtensions
    {

        public static void ConfigureCors(this IServiceCollection services)
        {
            services.AddCors(options =>
            {
                options.AddPolicy("CorsPolicy",
                    builder => builder.AllowAnyOrigin()
                    .AllowAnyMethod()
                    .AllowAnyHeader()
                    .AllowCredentials());
            });
        }
        public static void ConfigureIISIntegration(this IServiceCollection services)
        {
            services.Configure<IISOptions>(options =>
            {
                
            });
        }

        public static void ConfigureGifBattleConnection(this IServiceCollection services,IConfiguration configuration)
        {
             // requires using Microsoft.Extensions.Options
            services.Configure<GifBattleDatabaseSettings>(
                configuration.GetSection(nameof(GifBattleDatabaseSettings)));

            services.AddSingleton<IGifBattleDatabaseSettings>(sp =>
                sp.GetRequiredService<IOptions<GifBattleDatabaseSettings>>().Value);
        }
    }
}