import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTauntFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TauntFilled'

      short_name='Taunt'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M218 675q-24 13-51 5.5T126 650q-17-29-6-60t43-42l305-101q14-5 27.5 1.5T518 472q8 14 2.5 29.5T501 525L218 675Zm102 261q-33 0-56.5-23.5T240 856V709l315-166q14-8 19-23.5t-2-29.5l193-96q15-8 30.5-1.5T821 419q7 13 3.5 27T810 468L560 656v200q0 33-23.5 56.5T480 936H320Zm-20-440q-58 0-99-41t-41-99q0-58 41-99t99-41q58 0 99 41t41 99q0 58-41 99t-99 41Z"/>
    </Icon>
  );
});

IconMaterialTauntFilled.displayName = 'AmauiIconMaterialTauntFilled';

export default IconMaterialTauntFilled;
