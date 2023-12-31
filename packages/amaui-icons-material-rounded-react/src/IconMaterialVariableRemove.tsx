import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVariableRemove = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VariableRemove'

      short_name='VariableRemove'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M560-280H160q-17 0-28.5-11.5T120-320v-320q0-17 11.5-28.5T160-680h640q17 0 28.5 11.5T840-640v80h-80v-40H200v240h360v80Zm-360-80v-240 240Zm580 77-56 55q-11 11-27.5 11.5T668-228q-11-11-11-28t11-28l56-56-56-56q-11-11-11-28t11-28q11-11 28-11t28 11l56 56 56-56q11-11 27.5-11.5T892-452q11 11 11 28t-11 28l-55 56 55 56q11 11 11.5 27.5T892-228q-11 11-28 11t-28-11l-56-55Z"/>
    </Icon>
  );
});

IconMaterialVariableRemove.displayName = 'AmauiIconMaterialVariableRemove';

export default IconMaterialVariableRemove;
