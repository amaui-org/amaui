import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPreview = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Preview'

      short_name='Preview'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 15.5q1.4 0 2.55-.663 1.15-.662 1.8-1.837-.65-1.175-1.8-1.838Q13.4 10.5 12 10.5t-2.55.662Q8.3 11.825 7.65 13q.65 1.175 1.8 1.837 1.15.663 2.55.663Zm0 1.5q-2.05 0-3.662-1.113Q6.725 14.775 6 13q.725-1.775 2.338-2.887Q9.95 9 12 9t3.663 1.113Q17.275 11.225 18 13q-.725 1.775-2.337 2.887Q14.05 17 12 17Zm0-2.5q-.625 0-1.062-.438Q10.5 13.625 10.5 13t.438-1.062Q11.375 11.5 12 11.5t1.062.438q.438.437.438 1.062t-.438 1.062q-.437.438-1.062.438ZM3 21V3h18v18Zm2-2h14V7H5Z"/>
    </Icon>
  );
});

IconMaterialPreview.displayName = 'AmauiIconMaterialPreview';

export default IconMaterialPreview;
