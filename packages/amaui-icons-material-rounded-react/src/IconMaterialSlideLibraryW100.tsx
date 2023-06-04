import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSlideLibraryW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SlideLibraryW100'

      short_name='SlideLibrary'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M19.2 20.7H4.8q-.65 0-1.075-.425Q3.3 19.85 3.3 19.2V8.8q0-.65.425-1.075Q4.15 7.3 4.8 7.3h7.275V8H4.8q-.3 0-.55.25Q4 8.5 4 8.8v10.4q0 .3.25.55.25.25.55.25h14.4q.3 0 .55-.25.25-.25.25-.55v-5.05h.7v5.05q0 .65-.425 1.075-.425.425-1.075.425ZM4 20V8v6.15-.525V20ZM16.7 9.525l-1.725-.775q-.125-.05-.125-.175 0-.125.125-.175l1.725-.75.775-1.725q.05-.125.175-.125.125 0 .175.125l.75 1.725 1.725.75q.125.05.125.175 0 .125-.125.175l-1.725.775-.75 1.725q-.05.125-.175.125-.125 0-.175-.125Z"/>
    </Icon>
  );
});

IconMaterialSlideLibraryW100.displayName = 'AmauiIconMaterialSlideLibraryW100';

export default IconMaterialSlideLibraryW100;
