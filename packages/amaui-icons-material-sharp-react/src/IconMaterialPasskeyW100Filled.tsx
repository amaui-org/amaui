import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPasskeyW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PasskeyW100Filled'

      short_name='Passkey'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-492q-44.55 0-76.275-31.725Q332-555.45 332-600q0-44.55 31.725-76.275Q395.45-708 440-708q44.55 0 76.275 31.725Q548-644.55 548-600q0 44.55-31.725 76.275Q484.55-492 440-492Zm280 335-24-29v-151q-34-7-57-32.5T616-430q0-39.167 27.382-66.583Q670.765-524 709.882-524 749-524 776.5-496.583 804-469.167 804-430q0 35-23 60.5T724-337v53l29 29-29 29 29 29-33 40Zm-10-207q27.5 0 46.75-19.25T776-430q0-27.5-19.25-46.75T710-496q-27.5 0-46.75 19.25T644-430q0 27.5 19.25 46.75T710-364Zm-165-11q8 29 26.5 51.5t44.5 38.241V-212H172v-52q0-24 14-43t36-29q52-24 106.628-38Q383.255-388 440-388q25.902 0 52.451 2.5T545-375Z"/>
    </Icon>
  );
});

IconMaterialPasskeyW100Filled.displayName = 'AmauiIconMaterialPasskeyW100Filled';

export default IconMaterialPasskeyW100Filled;
