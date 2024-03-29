import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLightbulbCircle = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LightbulbCircle'

      short_name='LightbulbCircle'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 19q.625 0 1.062-.438.438-.437.438-1.062h-3q0 .625.438 1.062Q11.375 19 12 19Zm-3-2.5h6V15H9Zm.025-2.5h5.95q.925-.675 1.475-1.713Q17 11.25 17 10q0-2.075-1.462-3.537Q14.075 5 12 5 9.925 5 8.463 6.463 7 7.925 7 10q0 1.25.55 2.287Q8.1 13.325 9.025 14Zm.55-1.5q-.5-.5-.787-1.137Q8.5 10.725 8.5 10q0-1.45 1.025-2.475Q10.55 6.5 12 6.5q1.45 0 2.475 1.025Q15.5 8.55 15.5 10q0 .725-.287 1.363-.288.637-.788 1.137ZM12 22q-2.075 0-3.9-.788-1.825-.787-3.175-2.137-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175 1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138 1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175-1.35 1.35-3.175 2.137Q14.075 22 12 22Zm0-2q3.35 0 5.675-2.325Q20 15.35 20 12q0-3.35-2.325-5.675Q15.35 4 12 4 8.65 4 6.325 6.325 4 8.65 4 12q0 3.35 2.325 5.675Q8.65 20 12 20Zm0-8Z"/>
    </Icon>
  );
});

IconMaterialLightbulbCircle.displayName = 'AmauiIconMaterialLightbulbCircle';

export default IconMaterialLightbulbCircle;
