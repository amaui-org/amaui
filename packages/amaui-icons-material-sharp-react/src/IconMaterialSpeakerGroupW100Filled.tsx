import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSpeakerGroupW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SpeakerGroupW100Filled'

      short_name='SpeakerGroup'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8 19V2.3h11.7V19Zm5.85-11.75q.525 0 .888-.363.362-.362.362-.887t-.362-.888q-.363-.362-.888-.362t-.887.362Q12.6 5.475 12.6 6t.363.887q.362.363.887.363Zm0 8.85q1.2 0 2.025-.825t.825-2.025q0-1.2-.825-2.025T13.85 10.4q-1.2 0-2.025.825T11 13.25q0 1.2.825 2.025t2.025.825Zm0-.7q-.875 0-1.512-.638-.638-.637-.638-1.512t.638-1.512q.637-.638 1.512-.638t1.513.638q.637.637.637 1.512t-.637 1.512q-.638.638-1.513.638Zm.85 6.3H5.3V6.3H6V21h8.7Z"/>
    </Icon>
  );
});

IconMaterialSpeakerGroupW100Filled.displayName = 'AmauiIconMaterialSpeakerGroupW100Filled';

export default IconMaterialSpeakerGroupW100Filled;
