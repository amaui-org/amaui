import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFace3Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Face3Filled'

      short_name='Face3'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 18q3.35 0 5.675-2.338Q20 13.325 20 10q0-.775-.125-1.488-.125-.712-.4-1.387-.675.425-1.425.65Q17.3 8 16.5 8q-1.35 0-2.537-.613Q12.775 6.775 12 5.65q-.775 1.125-1.962 1.737Q8.85 8 7.5 8q-.8 0-1.55-.225t-1.425-.65q-.275.675-.4 1.387Q4 9.225 4 10q0 3.325 2.338 5.662Q8.675 18 12 18Zm-3-5.75q.525 0 .887-.363.363-.362.363-.887t-.363-.887Q9.525 9.75 9 9.75t-.887.363q-.363.362-.363.887t.363.887q.362.363.887.363Zm6 0q.525 0 .887-.363.363-.362.363-.887t-.363-.887Q15.525 9.75 15 9.75t-.887.363q-.363.362-.363.887t.363.887q.362.363.887.363ZM12 0q2.125 0 4.013.762 1.887.763 3.35 2.1 1.462 1.338 2.4 3.163Q22.7 7.85 22.9 9.95L24 22H0L1.1 9.95q.2-2.1 1.138-3.925.937-1.825 2.4-3.163Q6.1 1.525 7.988.762 9.875 0 12 0Z"/>
    </Icon>
  );
});

IconMaterialFace3Filled.displayName = 'AmauiIconMaterialFace3Filled';

export default IconMaterialFace3Filled;
