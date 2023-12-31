import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialOdtFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OdtFilled'

      short_name='Odt'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-360h160v-240H200v240Zm60-60v-120h40v120h-40Zm140 60h130l30-30v-180l-30-30H400v240Zm60-60v-120h40v120h-40Zm190 60h60v-180h50v-60H600v60h50v180ZM80-160v-640h800v640H80Z"/>
    </Icon>
  );
});

IconMaterialOdtFilled.displayName = 'AmauiIconMaterialOdtFilled';

export default IconMaterialOdtFilled;
