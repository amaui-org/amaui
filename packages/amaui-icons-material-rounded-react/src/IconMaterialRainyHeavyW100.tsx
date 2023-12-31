import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRainyHeavyW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RainyHeavyW100'

      short_name='RainyHeavy'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M326-228q-5 2-10.5.5T308-234L68-714q-2-5-.5-10.5T74-732q5-2 10.5-.5T92-726l241 480q2 5 0 10t-7 8Zm187 0q-5 3-11 1t-8-7L254-714q-2-5-.5-10.5t6.5-7.5q5-2 11-.5t8 6.5l241 480q2 5 0 10t-7 8Zm373 0q-5 2-10.5.5T868-234L628-714q-2-5-.5-11t6.5-8q5-2 11 0t8 7l240 480q2 5 0 10.5t-7 7.5Zm-186 0q-5 3-11 1t-8-7L441-714q-2-5-.5-11t6.5-8q5-2 11 0t8 7l240 479q2 5 .5 10.5T700-228Z"/>
    </Icon>
  );
});

IconMaterialRainyHeavyW100.displayName = 'AmauiIconMaterialRainyHeavyW100';

export default IconMaterialRainyHeavyW100;
