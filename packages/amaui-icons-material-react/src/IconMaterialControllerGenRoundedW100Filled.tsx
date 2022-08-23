import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialControllerGenRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ControllerGenRoundedW100Filled'
      short_name='ControllerGen'

      {...props}
    >
      <path d="M12 17.35q2.225 0 3.788-1.562Q17.35 14.225 17.35 12q0-2.225-1.562-3.788Q14.225 6.65 12 6.65q-2.225 0-3.787 1.562Q6.65 9.775 6.65 12q0 2.225 1.563 3.788Q9.775 17.35 12 17.35Zm0-.7q-1.925 0-3.287-1.363Q7.35 13.925 7.35 12q0-1.925 1.363-3.288Q10.075 7.35 12 7.35q1.925 0 3.288 1.362Q16.65 10.075 16.65 12q0 1.925-1.362 3.287Q13.925 16.65 12 16.65Zm-.25-4.4q.125.125.25.125t.25-.125l1.4-1.4q.125-.125.125-.25t-.125-.25q-.125-.125-.25-.125t-.25.125l-1.4 1.4q-.125.125-.125.25t.125.25ZM5.8 19.7q-.65 0-1.075-.425Q4.3 18.85 4.3 18.2V5.8q0-.65.425-1.075Q5.15 4.3 5.8 4.3h12.4q.65 0 1.075.425.425.425.425 1.075v12.4q0 .65-.425 1.075-.425.425-1.075.425Z"/>
    </Icon>
  );
});

IconMaterialControllerGenRoundedW100Filled.displayName = 'AmauiIconMaterialControllerGenRoundedW100Filled';

export default IconMaterialControllerGenRoundedW100Filled;
