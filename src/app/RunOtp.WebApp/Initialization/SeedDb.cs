using RunOtp.Infrastructure;

namespace RunOtp.WebApp.Initialization;

public class SeedDb : IStage
{
    private readonly MainDbContext _dbContext;

    public SeedDb(MainDbContext dbContext)
    {
        _dbContext = dbContext;
    }

    public int Order => 1;

    public async Task ExecuteAsync()
    {
        await _dbContext.Database.MigrateAsync();
    }
}