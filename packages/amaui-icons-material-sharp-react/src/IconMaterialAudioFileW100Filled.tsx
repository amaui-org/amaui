import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAudioFileW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AudioFileW100Filled'

      short_name='AudioFile'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10.75 18.6q.775 0 1.312-.538.538-.537.538-1.312V12.7h2.65v-1.4H11.9v4.15q-.225-.275-.512-.413-.288-.137-.638-.137-.775 0-1.312.538-.538.537-.538 1.312t.538 1.312q.537.538 1.312.538ZM5.3 20.7V3.3h9.35l4.05 4.05V20.7Zm9-13H18L14.3 4Z"/>
    </Icon>
  );
});

IconMaterialAudioFileW100Filled.displayName = 'AmauiIconMaterialAudioFileW100Filled';

export default IconMaterialAudioFileW100Filled;
