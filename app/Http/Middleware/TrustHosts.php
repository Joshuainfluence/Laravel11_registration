<?php

namespace App\Http\Middleware;

use Illuminate\Http\Request;
use Illuminate\Routing\Route;
use Illuminate\Support\Facades\Blade;
use Illuminate\Support\Str;
use Illuminate\Support\Collection;
use Illuminate\Http\Middleware\TrustHosts as Middleware;

class TrustHosts extends Middleware
{
    protected function shouldTrust($host): bool
    {
        return Str::is($this->getAllowedHosts(), $host);
    }

    protected function getAllowedHosts(): array
    {
        return [
            'localhost',
            '*.myapp.test',
            // Add other trusted hosts as needed
        ];
    }
}
