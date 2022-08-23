import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFace3SharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='Face3SharpW100Filled'
      short_name='Face3'

      {...props}
    >
      <path d="M12 18q3.35 0 5.675-2.338Q20 13.325 20 10q0-1.025-.237-1.95-.238-.925-.663-1.725-.575.375-1.237.575-.663.2-1.363.2-1.45 0-2.65-.763-1.2-.762-1.85-2.062-.625 1.3-1.837 2.062Q8.95 7.1 7.5 7.1q-.7 0-1.35-.2-.65-.2-1.225-.55-.425.825-.675 1.75Q4 9.025 4 10q0 3.325 2.338 5.662Q8.675 18 12 18Zm-3-5.75q.525 0 .887-.363.363-.362.363-.887t-.363-.887Q9.525 9.75 9 9.75t-.887.363q-.363.362-.363.887t.363.887q.362.363.887.363Zm6 0q.525 0 .887-.363.363-.362.363-.887t-.363-.887Q15.525 9.75 15 9.75t-.887.363q-.363.362-.363.887t.363.887q.362.363.887.363ZM12 1.3q1.8 0 3.388.687 1.587.688 2.8 1.875Q19.4 5.05 20.163 6.65q.762 1.6.937 3.425l.975 10.625H1.925L2.9 10.075q.175-1.825.938-3.425.762-1.6 1.974-2.788 1.213-1.187 2.801-1.875Q10.2 1.3 12 1.3Z"/>
    </Icon>
  );
});

IconMaterialFace3SharpW100Filled.displayName = 'AmauiIconMaterialFace3SharpW100Filled';

export default IconMaterialFace3SharpW100Filled;
