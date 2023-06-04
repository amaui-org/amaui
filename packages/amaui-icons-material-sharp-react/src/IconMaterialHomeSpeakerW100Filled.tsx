import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHomeSpeakerW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HomeSpeakerW100Filled'

      short_name='HomeSpeaker'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10.075 18.625q-1.275 0-2.1-.937-.825-.938-.65-2.188l1.1-8.25q.025-.075.063-.137.037-.063.137-.113l6.35-2.525q.15-.05.287.025.138.075.163.25l1.3 10.8q.125 1.225-.663 2.15-.787.925-2.062.925Zm-1.625-6.3h7.175l-.85-7.05-5.65 2.3Zm1.625 5.6H14q.95 0 1.55-.687.6-.688.475-1.613l-.3-2.6h-7.35l-.35 2.575q-.125.875.513 1.6.637.725 1.537.725Z"/>
    </Icon>
  );
});

IconMaterialHomeSpeakerW100Filled.displayName = 'AmauiIconMaterialHomeSpeakerW100Filled';

export default IconMaterialHomeSpeakerW100Filled;
