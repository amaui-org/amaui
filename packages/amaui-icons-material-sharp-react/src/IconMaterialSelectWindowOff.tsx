import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSelectWindowOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SelectWindowOff'

      short_name='SelectWindowOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M819-28 407-440H160v280h480v-161l80 80v161H80v-520h160v-7L27-820l57-57L876-85l-57 57Zm-99-327-80-80-165-165h245v160h80v-280H355L246-829v-51h634v520H720v5Z"/>
    </Icon>
  );
});

IconMaterialSelectWindowOff.displayName = 'AmauiIconMaterialSelectWindowOff';

export default IconMaterialSelectWindowOff;
