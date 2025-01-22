import { Badge } from "../ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
// import { Progress } from "../ui/progress";

export function MarketCardSkeleton() {
  return (
    <Card className="flex flex-col">
      <div className="animate-pulse">
        <CardHeader>
          <Badge
            variant="secondary"
            className="mb-2 bg-gray-200 h-4 w-full rounded-md"
          />
          <CardTitle className="bg-gray-200 h-6 w-1/3 rounded-md" />
        </CardHeader>
        <CardContent>
          <div className="mb-4 mx-6">
            <div className="flex justify-between mb-2">
              <span className="bg-gray-200 h-4 w-1/4 rounded-md" />
              <span className="bg-gray-200 h-4 w-1/4 rounded-md" />
            </div>
            {/* <Progress value={0} className="h-2 bg-gray-200" /> */}
          </div>
        </CardContent>
      </div>
    </Card>
  );
}
