<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\Project;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        User::factory()->create([
            'id' => 2,
            'name' => 'user 1',
            'email' => 'user+1@gmail.com',
            'password' => bcrypt('123.321A'),
            'email_verified_at' => time()
        ]);
        User::factory()->create([
            'id' => 3,
            'name' => 'user 2',
            'email' => 'user+2@gmail.com',
            'password' => bcrypt('123.321A'),
            'email_verified_at' => time()
        ]);

        Project::factory()
            ->count(15)
            ->hasTasks(15)
            ->create();
    }
}
