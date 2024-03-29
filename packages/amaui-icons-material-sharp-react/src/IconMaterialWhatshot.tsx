import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWhatshot = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Whatshot'

      short_name='Whatshot'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 22q-1.65 0-3.188-.512Q7.275 20.975 6 20l1.45-1.45q1.05.725 2.2 1.087Q10.8 20 12 20q3.325 0 5.663-2.337Q20 15.325 20 12t-2.337-5.663Q15.325 4 12 4T6.338 6.337Q4 8.675 4 12H2q0-2.075.788-3.9.787-1.825 2.137-3.175 1.35-1.35 3.175-2.138Q9.925 2 12 2t3.887.787q1.813.788 3.175 2.151 1.363 1.362 2.15 3.175Q22 9.925 22 12q0 2.05-.788 3.875-.787 1.825-2.15 3.187-1.362 1.363-3.175 2.15Q14.075 22 12 22Zm-8.025-4.075L8.05 13.85l3 2.5L16 11.4V14h2V8h-6v2h2.6l-3.65 3.65-3-2.5-5.025 5.025q.275.575.488.938.212.362.562.812ZM12 12Z"/>
    </Icon>
  );
});

IconMaterialWhatshot.displayName = 'AmauiIconMaterialWhatshot';

export default IconMaterialWhatshot;
