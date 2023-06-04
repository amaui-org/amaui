import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVideoCameraFrontW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VideoCameraFrontW100Filled'

      short_name='VideoCameraFront'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7.525 15.1h6.2v-.05q0-1.025-1.187-1.338-1.188-.312-1.913-.312-.725 0-1.912.312-1.188.313-1.188 1.338Zm3.1-3.5q.575 0 .963-.388.387-.387.387-.962t-.387-.963Q11.2 8.9 10.625 8.9t-.962.387q-.388.388-.388.963t.388.962q.387.388.962.388Zm-5.2 7.1q-.65 0-1.075-.425-.425-.425-.425-1.075V6.8q0-.65.425-1.075.425-.425 1.075-.425h10.4q.65 0 1.075.425.425.425.425 1.075v4.7L19.4 9.425q.2-.2.438-.088.237.113.237.388v4.55q0 .275-.237.387-.238.113-.438-.087L17.325 12.5v4.7q0 .65-.425 1.075-.425.425-1.075.425Z"/>
    </Icon>
  );
});

IconMaterialVideoCameraFrontW100Filled.displayName = 'AmauiIconMaterialVideoCameraFrontW100Filled';

export default IconMaterialVideoCameraFrontW100Filled;
