import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFamilyStarFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FamilyStarFilled'

      short_name='FamilyStar'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-320q48 0 85.5-28.5T620-422H340q17 45 54.5 73.5T480-320ZM380-480q25 0 42.5-17.5T440-540q0-25-17.5-42.5T380-600q-25 0-42.5 17.5T320-540q0 25 17.5 42.5T380-480Zm200 0q25 0 42.5-17.5T640-540q0-25-17.5-42.5T580-600q-25 0-42.5 17.5T520-540q0 25 17.5 42.5T580-480ZM305-704l175-227 175 227 274 92-173 245 7 273-283-79-283 79 7-274L32-612l273-92Z"/>
    </Icon>
  );
});

IconMaterialFamilyStarFilled.displayName = 'AmauiIconMaterialFamilyStarFilled';

export default IconMaterialFamilyStarFilled;
