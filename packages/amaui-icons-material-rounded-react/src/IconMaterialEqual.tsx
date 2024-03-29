import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEqual = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Equal'

      short_name='Equal'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M220 776q-25 0-42.5-17.5T160 716q0-25 17.5-42.5T220 656h520q25 0 42.5 17.5T800 716q0 25-17.5 42.5T740 776H220Zm0-280q-25 0-42.5-17.5T160 436q0-25 17.5-42.5T220 376h520q25 0 42.5 17.5T800 436q0 25-17.5 42.5T740 496H220Z"/>
    </Icon>
  );
});

IconMaterialEqual.displayName = 'AmauiIconMaterialEqual';

export default IconMaterialEqual;
