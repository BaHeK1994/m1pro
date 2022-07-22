import Vue from "vue";
import GameState from "../../components/game-state";

export class TableGeneratorDices {
  public init(base: Vue, state: GameState) {
    console.log('table-generator-dices');

    const oldPrepareDices = base.$options.methods.prepareDices;
    base.$options.methods.prepareDices = function (e) {
      console.log('prepareDices', e);

      const generator = window._replacements.generators.get(window.API.user.user_id);

      generator.generator_id = 49;
      generator.type = 'spinner';

      if (state.storage.status.action_player === window.API.user.user_id) {
        e.item_proto_id = 49;
      }
      oldPrepareDices.apply(base, [e]);
    };
  }
}

