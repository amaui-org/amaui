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
      <path d="M734-424H317q-60.417 0-102.708-41Q172-506 172-566t42.292-101Q256.583-708 317-708q5.95 0 9.975 4.035 4.025 4.035 4.025 10T326.975-684q-4.025 4-9.975 4-48 0-82.5 33.084-34.5 33.085-34.5 81.001Q200-518 234.5-485q34.5 33 82.5 33h417L587-596q-4.583-4-4.792-10-.208-6 4.488-10.174Q591-620 596.667-620q5.666 0 9.333 4l160 156q9 9.273 9 21.636Q775-426 766-417L606-261q-4 4-9.455 3.846-5.454-.154-9.545-3.846-5-4-5-10t5-10l147-143Z"/>
    </Icon>
  );
});

IconMaterialPromptSuggestionW100Filled.displayName = 'AmauiIconMaterialPromptSuggestionW100Filled';

export default IconMaterialPromptSuggestionW100Filled;
