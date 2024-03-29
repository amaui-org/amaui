import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSentimentExtremelyDissatisfiedFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SentimentExtremelyDissatisfiedFilled'

      short_name='SentimentExtremelyDissatisfied'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 22q-2.075 0-3.9-.788-1.825-.787-3.175-2.137-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175 1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138 1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175-1.35 1.35-3.175 2.137Q14.075 22 12 22ZM8.5 12q.625 0 1.038-.4.412-.4.462-1 .2.125.413.088.212-.038.337-.238.125-.2.062-.388-.062-.187-.262-.312l-2.625-1.5q-.2-.125-.375-.062-.175.062-.3.262-.1.2-.062.375.037.175.237.3l.225.125q-.3.2-.475.525T7 10.5q0 .65.425 1.075Q7.85 12 8.5 12Zm7 0q.65 0 1.075-.425Q17 11.15 17 10.5q0-.4-.175-.725-.175-.325-.475-.525l.225-.125q.2-.125.25-.313.05-.187-.075-.387-.1-.2-.287-.25-.188-.05-.388.075l-2.625 1.5q-.2.125-.25.312-.05.188.05.388.125.2.338.238.212.037.412-.088.05.6.463 1 .412.4 1.037.4Zm-7.75 5h8.5q.35 0 .488-.238.137-.237-.013-.537Q16 14.8 14.775 13.9 13.55 13 12 13q-1.55 0-2.775.9-1.225.9-1.95 2.325-.15.3-.012.537Q7.4 17 7.75 17Z"/>
    </Icon>
  );
});

IconMaterialSentimentExtremelyDissatisfiedFilled.displayName = 'AmauiIconMaterialSentimentExtremelyDissatisfiedFilled';

export default IconMaterialSentimentExtremelyDissatisfiedFilled;
