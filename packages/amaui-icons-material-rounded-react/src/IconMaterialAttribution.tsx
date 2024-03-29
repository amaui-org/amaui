import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAttribution = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Attribution'

      short_name='Attribution'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 19q.525 0 .887-.363.363-.362.363-.887V14.5h1q.2 0 .35-.15.15-.15.15-.35V9.9q0-.675-.712-1.037Q13.325 8.5 12 8.5q-1.325 0-2.037.363-.713.362-.713 1.037V14q0 .2.15.35.15.15.35.15h1v3.25q0 .525.363.887.362.363.887.363Zm0 3q-2.05 0-3.875-.788-1.825-.787-3.187-2.15-1.363-1.362-2.15-3.187Q2 14.05 2 12q0-2.075.788-3.887.787-1.813 2.15-3.175Q6.3 3.575 8.125 2.787 9.95 2 12 2q2.075 0 3.887.787 1.813.788 3.175 2.151 1.363 1.362 2.15 3.175Q22 9.925 22 12q0 2.05-.788 3.875-.787 1.825-2.15 3.187-1.362 1.363-3.175 2.15Q14.075 22 12 22Zm0-2q3.325 0 5.663-2.337Q20 15.325 20 12t-2.337-5.663Q15.325 4 12 4T6.338 6.337Q4 8.675 4 12t2.338 5.663Q8.675 20 12 20Zm0-12q.65 0 1.075-.425.425-.425.425-1.075 0-.65-.425-1.075Q12.65 5 12 5q-.65 0-1.075.425Q10.5 5.85 10.5 6.5q0 .65.425 1.075Q11.35 8 12 8Zm0 4Z"/>
    </Icon>
  );
});

IconMaterialAttribution.displayName = 'AmauiIconMaterialAttribution';

export default IconMaterialAttribution;
