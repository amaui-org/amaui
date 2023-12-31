import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSdkFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SdkFilled'

      short_name='Sdk'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-120q-33 0-56.5-23.5T120-200v-500q0-14 4.5-26.5T138-750l56-68q9-11 20.5-16.5T240-840h480q14 0 25.5 5.5T766-818l56 68q9 11 13.5 23.5T840-700v500q0 33-23.5 56.5T760-120H200Zm16-600h528l-34-40H250l-34 40Zm392 300-55 55q-12 12-12 29t12 29q12 12 29 12t29-12l85-85q12-12 12-28t-12-28l-85-85q-12-12-29-12t-29 12q-12 12-12 29t12 29l55 55Zm-254 0 55-55q12-12 12-29t-12-29q-12-12-29-12t-29 12l-85 85q-12 12-12 28t12 28l85 85q12 12 29 12t29-12q12-12 12-29t-12-29l-55-55Z"/>
    </Icon>
  );
});

IconMaterialSdkFilled.displayName = 'AmauiIconMaterialSdkFilled';

export default IconMaterialSdkFilled;
