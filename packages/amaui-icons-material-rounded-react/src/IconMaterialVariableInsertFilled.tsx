import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVariableInsertFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VariableInsertFilled'

      short_name='VariableInsert'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-280q-17 0-28.5-11.5T120-320v-320q0-17 11.5-28.5T160-680h640q17 0 28.5 11.5T840-640v120H640q-33 0-56.5 23.5T560-440v160H160Zm560-23v83q0 17-11.5 28.5T680-180q-17 0-28.5-11.5T640-220v-180q0-17 11.5-28.5T680-440h180q17 0 28.5 11.5T900-400q0 17-11.5 28.5T860-360h-84l116 115q12 12 12 28.5T892-188q-12 12-28.5 12T835-188L720-303Z"/>
    </Icon>
  );
});

IconMaterialVariableInsertFilled.displayName = 'AmauiIconMaterialVariableInsertFilled';

export default IconMaterialVariableInsertFilled;
