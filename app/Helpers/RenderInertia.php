<?php

namespace App\Helpers;

use Inertia\Inertia;

trait RenderInertia
{
  /**
   * Render an inertia component
   * 
   * @param  string  $component
   * @param  array  $props
   * @return \Inertia\Response
   *  */
  public function render(string $component, array $props = [])
  {
    return Inertia::render($component, $props);
  }
}
