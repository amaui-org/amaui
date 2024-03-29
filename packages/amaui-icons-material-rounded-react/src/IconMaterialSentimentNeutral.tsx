import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSentimentNeutral = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SentimentNeutral'

      short_name='SentimentNeutral'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M15.5 11q.65 0 1.075-.425Q17 10.15 17 9.5q0-.65-.425-1.075Q16.15 8 15.5 8q-.65 0-1.075.425Q14 8.85 14 9.5q0 .65.425 1.075Q14.85 11 15.5 11Zm-7 0q.65 0 1.075-.425Q10 10.15 10 9.5q0-.65-.425-1.075Q9.15 8 8.5 8q-.65 0-1.075.425Q7 8.85 7 9.5q0 .65.425 1.075Q7.85 11 8.5 11Zm1.25 4.5h4.5q.325 0 .538-.213.212-.212.212-.537 0-.325-.212-.538Q14.575 14 14.25 14h-4.5q-.325 0-.537.212Q9 14.425 9 14.75q0 .325.213.537.212.213.537.213ZM12 22q-2.075 0-3.9-.788-1.825-.787-3.175-2.137-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175 1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138 1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175-1.35 1.35-3.175 2.137Q14.075 22 12 22Zm0-10Zm0 8q3.325 0 5.663-2.337Q20 15.325 20 12t-2.337-5.663Q15.325 4 12 4T6.338 6.337Q4 8.675 4 12t2.338 5.663Q8.675 20 12 20Z"/>
    </Icon>
  );
});

IconMaterialSentimentNeutral.displayName = 'AmauiIconMaterialSentimentNeutral';

export default IconMaterialSentimentNeutral;
