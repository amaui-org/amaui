import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMonorailW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MonorailW100'

      short_name='Monorail'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M299-132q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h167v-97q0-5.95 4.04-9.98 4.03-4.02 10-4.02 5.96 0 9.96 4.02 4 4.03 4 9.98v97h168q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H299Zm33-696h296q49.5 0 84.75 35.25T748-708v363q0 43.5-30.75 74.25T643-240h-52q-7.22 0-12.11-4.89Q574-249.77 574-257q0-38.77-27.66-66.39Q518.68-351 479.84-351t-66.34 27.61Q386-295.77 386-257q0 7.23-4.89 12.11Q376.23-240 369-240h-52q-43.5 0-74.25-30.75T212-345v-363q0-49.5 35.25-84.75T332-828Zm-92 324v159q0 32.08 22.46 54.54T317-268h41q6-48 40-79.5t82-31.5q48 0 82 31.5t40 79.5h41q32.08 0 54.54-22.46T720-345v-159H240Zm0-188v160h480v-160H240Zm92-108q-35 0-60.5 22.5T241-720h478q-5-35-30.5-57.5T628-800H332Zm0 80h387-478 91Zm-92 216h480-480Z"/>
    </Icon>
  );
});

IconMaterialMonorailW100.displayName = 'AmauiIconMaterialMonorailW100';

export default IconMaterialMonorailW100;
