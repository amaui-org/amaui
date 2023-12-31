import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCrosswordW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CrosswordW100Filled'

      short_name='Crossword'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M373-300v123q0 18.75 13.125 31.875T418-132h123q18.75 0 31.875-13.125T586-177v-123q0-18.75-13.125-31.875T541-345H418q-18.75 0-31.875 13.125T373-300Zm-28-118v-123q0-18.75-13.125-31.875T300-586H177q-18.75 0-31.875 13.125T132-541v123q0 18.75 13.125 31.875T177-373h123q18.75 0 31.875-13.125T345-418Zm73 45h123q18.75 0 31.875-13.125T586-418v-123q0-18.75-13.125-31.875T541-586H418q-18.75 0-31.875 13.125T373-541v123q0 18.75 13.125 31.875T418-373Zm241 0h124q18.75 0 31.875-13.125T828-418v-123q0-18.75-13.125-31.875T783-586H659q-18.75 0-31.875 13.125T614-541v123q0 18.75 13.125 31.875T659-373Zm0-241h124q18.75 0 31.875-13.125T828-659v-124q0-18.75-13.125-31.875T783-828H659q-18.75 0-31.875 13.125T614-783v124q0 18.75 13.125 31.875T659-614Z"/>
    </Icon>
  );
});

IconMaterialCrosswordW100Filled.displayName = 'AmauiIconMaterialCrosswordW100Filled';

export default IconMaterialCrosswordW100Filled;
