import { Component, input, output } from '@angular/core';
import { CcSiteHeader } from '../../organisms/cc-site-header/cc-site-header';
import { CcHero } from '../../organisms/cc-hero/cc-hero';
import { CcSorbos } from '../../organisms/cc-sorbos/cc-sorbos';
import { CcSeleccion, CcProducto } from '../../organisms/cc-seleccion/cc-seleccion';
import { CcSiteFooter } from '../../organisms/cc-site-footer/cc-site-footer';

@Component({
  selector: 'app-coffee-page-template',
  imports: [CcSiteHeader, CcHero, CcSorbos, CcSeleccion, CcSiteFooter],
  templateUrl: './coffee-page-template.html',
  styleUrl: './coffee-page-template.css',
})
export class CoffeePageTemplate {
  readonly productos = input.required<CcProducto[]>();
  readonly pedir = output<CcProducto>();
}
