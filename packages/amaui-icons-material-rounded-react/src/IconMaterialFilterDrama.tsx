import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFilterDrama = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FilterDrama'

      short_name='FilterDrama'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.5 20q-2.3 0-3.9-1.6T1 14.5q0-1.95 1.213-3.438Q3.425 9.575 5.25 9.15q.625-2.25 2.475-3.7Q9.575 4 12 4q2.975 0 4.988 2.062Q19 8.125 19 11q1.875.2 2.938 1.55Q23 13.9 23 15.475q0 1.875-1.312 3.2Q20.375 20 18.5 20Zm0-2h12q1.05 0 1.775-.725Q21 16.55 21 15.5q0-1.05-.725-1.775Q19.55 13 18.5 13H17v-2q0-2.075-1.462-3.538Q14.075 6 12 6q-1.575 0-2.8.862-1.225.863-1.8 2.213 1.7.275 2.925 1.462Q11.55 11.725 11.9 13.4q.1.425-.212.762-.313.338-.813.338-.35 0-.613-.238-.262-.237-.362-.612-.275-1.125-1.225-1.888Q7.725 11 6.5 11q-1.45 0-2.475 1.025Q3 13.05 3 14.5q0 1.45 1.025 2.475Q5.05 18 6.5 18Z"/>
    </Icon>
  );
});

IconMaterialFilterDrama.displayName = 'AmauiIconMaterialFilterDrama';

export default IconMaterialFilterDrama;
