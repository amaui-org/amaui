import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMediaOutput = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MediaOutput'

      short_name='MediaOutput'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M340-520ZM80-160v-720h520v242q-21 2-41 7.5T520-617v-183H160v560h160v80H80Zm240-121v-39q0-11 .5-21.5T323-363q-19-5-31-21t-12-36q0-25 17.5-42.5T340-480q5 0 10 1t10 3q10-18 22.5-34.5T409-542q-15-9-32.5-13.5T340-560q-58 0-99 41t-41 99q0 54 34.5 92.5T320-281Zm20-339q25 0 42.5-17.5T400-680q0-25-17.5-42.5T340-740q-25 0-42.5 17.5T280-680q0 25 17.5 42.5T340-620ZM560-80H400v-240q0-100 70-170t170-70q100 0 170 70t70 170v240H720v-200h100v-40q0-75-52.5-127.5T640-500q-75 0-127.5 52.5T460-320v40h100v200Z"/>
    </Icon>
  );
});

IconMaterialMediaOutput.displayName = 'AmauiIconMaterialMediaOutput';

export default IconMaterialMediaOutput;
