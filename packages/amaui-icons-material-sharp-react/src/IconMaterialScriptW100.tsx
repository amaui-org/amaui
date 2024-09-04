import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialScriptW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScriptW100'

      short_name='Script'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M345-283q8 0 12.5-5t5.5-13q2-16 3-32.5t2-31.5q1-12 2.5-23.5T374-412q26-4 51.5-7t51.5-6q24-2 48-3.5t48-3.5q5 20 8.5 38.5T591-355q5 14 11 31t14 30q5 9 13 13t17 0q9-4 9.5-12.5T651-313q-7-17-13.5-35.5T627-384q-3-13-6.5-25.5T614-435q6 0 12-1t11-3q6-2 10.5-6.5T652-457q0-7-6.5-10.5T631-472h-11.5q-5.5 0-11.5 1-2-17-4-33t-4-33q-2-17-5-33t-7-32q-5-17-13-31.5T555-659q-10-9-22-14t-26-5q-16 0-30 5.5T451-658q-16 12-29 28t-24 34q-4-6-8-10.5t-11-4.5q-6 0-11 4t-5 10q0 24-3.5 48t-8.5 47q-4 17-8 32.5t-9 32.5q-4 0-8 .5t-8 1.5q-7 1-12 4t-5 10q0 5 3 8t8 5q5 2 9 2h9q-2 15-3.5 30t-1.5 31q0 11 .5 22.5T328-301q2 8 5.5 13t11.5 5Zm44-170q8-28 14.5-56t18.5-54q12-26 34-52t51-26q22 0 31 22t13 46q5 26 7.5 52t6.5 52q-22 1-44.5 2.5T477-463l-44 4q-22 2-44 6ZM132-132v-696h696v696H132Zm28-28h640v-640H160v640Zm0 0v-640 640Z"/>
    </Icon>
  );
});

IconMaterialScriptW100.displayName = 'AmauiIconMaterialScriptW100';

export default IconMaterialScriptW100;
