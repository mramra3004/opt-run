using System.Diagnostics;
using Microsoft.AspNetCore.Http;
using Serilog.Core;
using Serilog.Events;

namespace Shared.Logging;

internal class TraceIdEnricher : ILogEventEnricher
{
    public const string DefaultPropertyName = "TraceId";
    private readonly IHttpContextAccessor _httpContextAccessor;

    private readonly string _traceIdName;

    public TraceIdEnricher(IHttpContextAccessor httpContextAccessor)
        : this(DefaultPropertyName, httpContextAccessor)
    {
    }

    public TraceIdEnricher(string traceIdName, IHttpContextAccessor httpContextAccessor)
    {
        _traceIdName = traceIdName;
        _httpContextAccessor = httpContextAccessor;
    }

    public void Enrich(LogEvent logEvent, ILogEventPropertyFactory propertyFactory)
    {
        var traceId = Activity.Current?.TraceId.ToString() ?? _httpContextAccessor?.HttpContext?.TraceIdentifier;
        var versionProperty = propertyFactory.CreateProperty(_traceIdName, traceId);
        logEvent.AddPropertyIfAbsent(versionProperty);
    }
}