import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSlideLibraryW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SlideLibraryW100Filled'

      short_name='SlideLibrary'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.8 20.7q-.65 0-1.075-.425Q3.3 19.85 3.3 19.2V8.8q0-.65.425-1.075Q4.15 7.3 4.8 7.3h7.425q-.075.325-.112.638-.038.312-.038.637 0 2.325 1.625 3.95t3.95 1.625q.8 0 1.588-.238.787-.237 1.462-.687V19.2q0 .65-.425 1.075-.425.425-1.075.425ZM16.7 9.525l-1.725-.775q-.125-.05-.125-.175 0-.125.125-.175l1.725-.75.775-1.725q.05-.125.175-.125.125 0 .175.125l.75 1.725 1.725.75q.125.05.125.175 0 .125-.125.175l-1.725.775-.75 1.725q-.05.125-.175.125-.125 0-.175-.125Z"/>
    </Icon>
  );
});

IconMaterialSlideLibraryW100Filled.displayName = 'AmauiIconMaterialSlideLibraryW100Filled';

export default IconMaterialSlideLibraryW100Filled;
