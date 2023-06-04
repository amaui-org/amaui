import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSpecialCharacterW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SpecialCharacterW100'

      short_name='SpecialCharacter'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M480 296q-100 0-170 70t-70 170q0 77 44 139.5T401 763q13 5 21 15t8 23v38q0 19-13 32t-32 13H206q-14 0-24-10t-10-24q0-14 10-24t24-10h146q-83-38-131.5-113.5T172 536q0-128 90-218t218-90q128 0 218 90t90 218q0 91-48.5 166.5T608 816h146q14 0 24 10t10 24q0 14-10 24t-24 10H575q-19 0-32-13t-13-32v-38q0-13 8-23t21-15q73-25 117-87.5T720 536q0-100-70-170t-170-70Z"/>
    </Icon>
  );
});

IconMaterialSpecialCharacterW100.displayName = 'AmauiIconMaterialSpecialCharacterW100';

export default IconMaterialSpecialCharacterW100;
