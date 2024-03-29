import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTabGroupFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TabGroupFilled'

      short_name='TabGroup'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M160 976q-33 0-56.5-23.5T80 896V376q0-17 11.5-28.5T120 336q17 0 28.5 11.5T160 376v520h520q17 0 28.5 11.5T720 936q0 17-11.5 28.5T680 976H160Zm160-160q-33 0-56.5-23.5T240 736V256q0-33 23.5-56.5T320 176h480q33 0 56.5 23.5T880 256v480q0 33-23.5 56.5T800 816H320Zm480-400V256H520v120q0 17 11.5 28.5T560 416h240Z"/>
    </Icon>
  );
});

IconMaterialTabGroupFilled.displayName = 'AmauiIconMaterialTabGroupFilled';

export default IconMaterialTabGroupFilled;
