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
      <path d="M172 884v-68h180q-82-38-131-113.5T172 536q0-128 90-218t218-90q128 0 218 90t90 218q0 91-49 166.5T608 816h180v68H530V771q84-17 137-83.5T720 536q0-100-70-170t-170-70q-100 0-170 70t-70 170q0 85 53 151.5T430 771v113H172Z"/>
    </Icon>
  );
});

IconMaterialSpecialCharacterW100.displayName = 'AmauiIconMaterialSpecialCharacterW100';

export default IconMaterialSpecialCharacterW100;
