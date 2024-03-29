import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBackToTabFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BackToTabFilled'

      short_name='BackToTab'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M160 393v103q0 17-11.5 28.5T120 536q-17 0-28.5-11.5T80 496V296q0-17 11.5-28.5T120 256h200q17 0 28.5 11.5T360 296q0 17-11.5 28.5T320 336H216l143 143q12 12 12.5 28T360 535q-12 12-28.5 12T303 535L160 393Zm0 503q-33 0-56.5-23.5T80 816V656q0-17 11.5-28.5T120 616q17 0 28.5 11.5T160 656v160h280q17 0 28.5 11.5T480 856q0 17-11.5 28.5T440 896H160Zm680-280q-17 0-28.5-11.5T800 576V336H480q-17 0-28.5-11.5T440 296q0-17 11.5-28.5T480 256h320q33 0 56.5 23.5T880 336v240q0 17-11.5 28.5T840 616ZM600 896q-17 0-28.5-11.5T560 856V736q0-17 11.5-28.5T600 696h240q17 0 28.5 11.5T880 736v120q0 17-11.5 28.5T840 896H600Z"/>
    </Icon>
  );
});

IconMaterialBackToTabFilled.displayName = 'AmauiIconMaterialBackToTabFilled';

export default IconMaterialBackToTabFilled;
