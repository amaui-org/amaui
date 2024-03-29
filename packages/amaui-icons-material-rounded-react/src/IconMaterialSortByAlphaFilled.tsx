import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSortByAlphaFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SortByAlphaFilled'

      short_name='SortByAlpha'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.4 17q-.575 0-.838-.375Q2.3 16.25 2.5 15.7L5.375 8q.15-.425.575-.713Q6.375 7 6.825 7q.425 0 .863.287.437.288.587.713l2.9 7.725q.2.525-.062.9-.263.375-.838.375-.275 0-.537-.175-.263-.175-.363-.45L8.75 14.6H4.9l-.575 1.75q-.1.275-.362.462Q3.7 17 3.4 17Zm2.1-4.1h2.6L6.9 9.15h-.15Zm9.425 4.1q-.5 0-.863-.363-.362-.362-.362-.862 0-.275.125-.638.125-.362.3-.562L18.75 8.8H14.8q-.375 0-.637-.263-.263-.262-.263-.637t.263-.638Q14.425 7 14.8 7h4.925q.5 0 .863.362.362.363.362.888 0 .275-.112.625-.113.35-.288.55l-4.6 5.775h4.15q.375 0 .638.262.262.263.262.638t-.262.638Q20.475 17 20.1 17ZM10.2 5q-.35 0-.475-.3t.125-.55l1.8-1.8q.05-.05.35-.15.05 0 .35.15l1.8 1.8q.25.25.125.55-.125.3-.475.3ZM12 21.8q-.05 0-.35-.15l-1.8-1.8q-.25-.25-.125-.55.125-.3.475-.3h3.6q.35 0 .475.3t-.125.55l-1.8 1.8q-.05.05-.35.15Z"/>
    </Icon>
  );
});

IconMaterialSortByAlphaFilled.displayName = 'AmauiIconMaterialSortByAlphaFilled';

export default IconMaterialSortByAlphaFilled;
