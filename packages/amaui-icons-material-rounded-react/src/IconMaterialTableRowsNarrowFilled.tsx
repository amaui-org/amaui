import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTableRowsNarrowFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TableRowsNarrowFilled'

      short_name='TableRowsNarrow'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M160 716q-17 0-28.5-11.5T120 676v-20q0-17 11.5-28.5T160 616h640q17 0 28.5 11.5T840 656v20q0 17-11.5 28.5T800 716H160Zm0-180q-17 0-28.5-11.5T120 496v-20q0-17 11.5-28.5T160 436h640q17 0 28.5 11.5T840 476v20q0 17-11.5 28.5T800 536H160Zm0-180q-17 0-28.5-11.5T120 316v-20q0-17 11.5-28.5T160 256h640q17 0 28.5 11.5T840 296v20q0 17-11.5 28.5T800 356H160Zm0 540q-17 0-28.5-11.5T120 856v-20q0-17 11.5-28.5T160 796h640q17 0 28.5 11.5T840 836v20q0 17-11.5 28.5T800 896H160Z"/>
    </Icon>
  );
});

IconMaterialTableRowsNarrowFilled.displayName = 'AmauiIconMaterialTableRowsNarrowFilled';

export default IconMaterialTableRowsNarrowFilled;
