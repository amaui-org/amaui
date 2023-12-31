import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTroubleshootW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TroubleshootW100'

      short_name='Troubleshoot'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M435-266q-67 0-124-27t-98-74q-5-5-5.5-12t4.5-12q5-4 11-2.5t11 6.5q37 43 89 68t112 25q110 0 188-78t78-188q0-110-78-188t-188-78q-100 0-174.5 65T172-600q-2 8-5 14t-11 6q-7 0-10.5-7.5T144-603q15-108 97-179.5T435-854q123 0 208.5 85.5T729-560q0 60-19.5 106.5T653-362l206 206q5 5 4.5 10t-4.5 10q-5 5-10.5 5t-10.5-5L632-342q-45 37-91 56.5T435-266Zm-14-186 53-161q2-5 6.5-8t9.5-3h15q5 0 9 2t6 7l55 111h20q6 0 10 4t4 10q0 6-4 10t-10 4h-28q-4 0-7.5-2t-5.5-6l-56-112-55 168q-2 5-6.5 8.5T427-416h-11q-6 0-10.5-3.5T399-428l-69-231-61 174q-2 5-5 7t-8 2H105q-6 0-10-4t-4-10q0-6 4-10t10-4h141l62-178q2-5 6.5-8.5T325-694h11q6 0 10.5 3.5t6.5 9.5l68 229Z"/>
    </Icon>
  );
});

IconMaterialTroubleshootW100.displayName = 'AmauiIconMaterialTroubleshootW100';

export default IconMaterialTroubleshootW100;
