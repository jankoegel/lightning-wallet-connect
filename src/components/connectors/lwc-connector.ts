import {TemplateResult, html} from 'lit';
import {LwcElement} from '../lwc-element';
import {withTwind} from '../twind/withTwind';
import {ConnectorType} from '../../types/ConnectorType';

export abstract class LwcConnector extends withTwind(LwcElement) {
  private _title: string;
  private _background: string;
  private _icon: TemplateResult<2>;
  protected _connectorType: ConnectorType;
  protected abstract _onClick(): void;
  constructor(
    connectorType: ConnectorType,
    title: string,
    background: string,
    icon: TemplateResult<2>
  ) {
    super();
    this._connectorType = connectorType;
    this._title = title;
    this._background = background;
    this._icon = icon;
  }

  override render() {
    return html`<div
      class="flex flex-col justify-between items-center w-32 h-24 cursor-pointer"
      @click=${this._onClick}
    >
      <div
        class="w-16 h-16 drop-shadow-lg rounded-2xl flex justify-center items-center"
        style="background: ${this._background};"
      >
        ${this._icon}
      </div>
      <span class="text-sm font-sans font-medium">${this._title}</span>
    </div>`;
  }
}
