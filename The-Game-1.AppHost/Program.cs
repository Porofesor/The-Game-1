var builder = DistributedApplication.CreateBuilder(args);

var cache = builder.AddRedis("cache");

var apiService = builder.AddProject<Projects.The_Game_1_ApiService>("apiservice");

builder.AddProject<Projects.The_Game_1_Web>("webfrontend")
    .WithExternalHttpEndpoints()
    .WithReference(cache)
    .WaitFor(cache)
    .WithReference(apiService)
    .WaitFor(apiService);

builder.AddProject<Projects.TheGame_Main_Web>("thegame-main-web");

builder.Build().Run();
