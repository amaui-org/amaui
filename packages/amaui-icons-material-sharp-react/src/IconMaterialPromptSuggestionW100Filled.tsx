import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPromptSuggestionW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PromptSuggestionW100Filled'

      short_name='PromptSuggestion'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m597-252-20-19 157-153H317q-60 0-102.5-41T172-566q0-60 42.5-101T317-708h18v28h-18q-48 0-82.5 33T200-566q0 48 34.5 81t82.5 33h417L577-606l20-19 191 187-191 186Z"/>
    </Icon>
  );
});

IconMaterialPromptSuggestionW100Filled.displayName = 'AmauiIconMaterialPromptSuggestionW100Filled';

export default IconMaterialPromptSuggestionW100Filled;
