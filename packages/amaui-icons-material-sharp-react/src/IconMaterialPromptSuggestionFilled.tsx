import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPromptSuggestionFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PromptSuggestionFilled'

      short_name='PromptSuggestion'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m600-200-56-57 143-143H300q-75 0-127.5-52.5T120-580q0-75 52.5-127.5T300-760h20v80h-20q-42 0-71 29t-29 71q0 42 29 71t71 29h387L544-624l56-56 240 240-240 240Z"/>
    </Icon>
  );
});

IconMaterialPromptSuggestionFilled.displayName = 'AmauiIconMaterialPromptSuggestionFilled';

export default IconMaterialPromptSuggestionFilled;
