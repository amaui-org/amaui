import { TMethod } from '@amaui/models';

declare global {
  function group(name: string, method: TMethod): void;
  function to(name: string, method: (resolve?: <T>(arg?: T) => T, reject?: (arg?: Error) => Error) => any | Promise<any>): void;

  function preAll(method: TMethod): void;
  function preEveryGroup(method: TMethod): void;
  function preEveryTo(method: TMethod): void;
  function pre(method: TMethod): void;
  function preTo(method: TMethod): void;

  function postAll(method: TMethod): void;
  function postEveryGroup(method: TMethod): void;
  function postEveryTo(method: TMethod): void;
  function post(method: TMethod): void;
  function postTo(method: TMethod): void;
}
