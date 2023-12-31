import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSkilletW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SkilletW100'

      short_name='Skillet'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-212q-29 0-48.5-19.5T132-280v-134q0-6 4-10t10-4h494q0-29 16.5-52.5T701-513l150-51q5-2 10 1t7 8q2 5-.5 10t-7.5 7l-150 51q-19 6-30.5 22.5T668-428v148q0 28-19.5 48T600-212H200Zm0-28h400q17 0 28.5-11.5T640-280v-120H160v120q0 17 11.5 28.5T200-240Zm306-414q-22-35-31.5-62t-9.5-57q0-6 4.5-10.5T480-788q6 0 10.5 4.5T495-772q1 26 10 50.5t31 59.5q22 35 31.5 62t9.5 57q0 6-4.5 10.5T562-528q-6 0-10-4.5t-4-11.5q-1-26-10.5-50.5T506-654Zm-315 0q-22-35-31.5-62t-9.5-57q0-6 4.5-10.5T165-788q6 0 10 4.5t4 11.5q1 26 10 50.5t31 59.5q22 35 31.5 62t9.5 57q0 6-4 10.5t-10 4.5q-6 0-10.5-4.5T232-544q-1-26-10-50.5T191-654Zm156 0q-22-35-31.5-62t-9.5-57q0-6 4.5-10.5T321-788q6 0 10 4.5t4 11.5q1 26 10 50.5t31 59.5q22 35 31.5 62t9.5 57q0 6-4 10.5t-10 4.5q-6 0-10.5-4.5T388-544q-1-26-9.5-50.5T347-654Zm53 334Z"/>
    </Icon>
  );
});

IconMaterialSkilletW100.displayName = 'AmauiIconMaterialSkilletW100';

export default IconMaterialSkilletW100;
